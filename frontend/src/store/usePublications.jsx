import {create} from "zustand";

export const usePublications = create((set,get) => ({
    isPublicationsOpen: false,
    setIsOpne: ()=>{
        const {isPublicationsOpen} = get();
        set({isPublicationsOpen: !isPublicationsOpen ? false : true});
    },
    dataPublications: [],
    isLoading: false,
    fetchPublications: async () => {
        set({ isLoading: true });
        try {
            const publications = await fetch("http://localhost:3000/v1/api/publications");
            const dataJSON = await publications.json();
            set({ dataPublications: dataJSON.publications || [], isLoading: false });
        } catch (error) {
            console.error("Error fetching publications:", error);
            set({isLoading: false});
        }
    },
}));