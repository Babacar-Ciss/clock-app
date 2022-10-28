import create from 'zustand'
import axios from 'axios';



const useStore = create((set) => ({

  data: [],
  loading: false,
  hasErrors: false,
  fetchQuotes: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(
        "https://programming-quotes-api.herokuapp.com/Quotes?count=200"
      );
      set((state) => ({ data: (state.data = response.data), loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },

  isDetailShown: false,
  ToggleDetail: () => set((state) => ({ isDetailShown: !state.isDetailShown})),

  momentOfTheDay : "",
  setMomentOfTheDay : (moment) => set({momentOfTheDay : moment})
}))


export default useStore;