import { defineStore } from 'pinia'

export const useWishesStore = defineStore('wishes', {
  state: () => {
    return {
      wishes: [
        {
          id: 0,
          name: 'iPhone 6s Plus 16GB',
          price: 1000,
          sale: 649,
          currency: '$',
          photo: '/assets/img1.jpg'
        },
        {
          id: 1,
          name: 'iPad Pro 32GB',
          price: 800,
          sale: 600,
          currency: '$',
          photo: '/assets/img2.jpg'
        },
        {
          id: 2,
          name: 'MacBook Pro',
          price: 8000,
          currency: 'PLN',
          photo: '/assets/img3.jpg'
        }
      ],

      wishKeys: ['#', 'nazwa', 'promocyjna cena', 'cena', 'waluta'],
    }
  },

  actions: {
    updateWishItem(id, name, price, sale, currency) {
    const wish = this.wishes.find((wish) => wish.id === id);
    wish.name = name
    wish.price = price
    wish.sale = sale
    wish.currency = currency
    if(wish.sale === undefined || wish.sale === "") {
      delete wish.sale
    }
    return wish
    },

    toggleShowModal() {
      this.showModal = !this.showModal
    }
  },

      getters: {
        getWishes() {
          return this.wishes
        },

        getWishById(state) {
          const wishes = state.wishes;
          return (id) => {
          const wish = wishes.find((wish) => wish.id === id)
          return wish
          }
        },

        getSalePercent: (state) => {
          return (id) => {
            const sale = (state.wishes[id].sale / state.wishes[id].price) * 100
            return sale
          }
        },


      }
})
