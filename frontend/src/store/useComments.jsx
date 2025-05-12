import { create } from "zustand";

export const useComments = create((set, get) => ({
    isCommentsOpen: false,
    setIsOpen: () => {
        const { isCommentsOpen } = get();
        set({ isCommentsOpen: !isCommentsOpen ? false : true });
    },
    dataComments: [],
    isLoading: false,
    fetchComments: async (publicationId) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`http://localhost:3000/v1/api/getCommentsByPublication/${publicationId}`);
            const dataJSON = await response.json();
            if (dataJSON.success) {
                set({ dataComments: dataJSON.comments || [], isLoading: false });
            } else {
                set({ dataComments: [], isLoading: false });
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
            set({ dataComments: [], isLoading: false });
        }
    },
    isCreatingComment: false,
    responseCreateComment: {},
    createComment: async (publicationId, comment) =>{
        set({ isCreatingComment: true });
        try {
            const response = await fetch("http://localhost:3000/v1/api/saveComment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...comment,
                    publicationId
                }),
            });
            const dataJSON = await response.json();
            set({ responseCreateComment: dataJSON, isCreatingComment: false });
        } catch (error) {
            console.error("Error creating comment:", error);
            set({ isCreatingComment: false });
        }
    }

}));