const items = {
	alcohol: {
		beer: {
	    tap: [
	      {
	        brand: "budlight",
	        price: {
	          sm: 2.50,
	          lg: 4.00
	        }
	      },
	      {
	        brand: "corona",
	        price: {
	          sm: 3.00,
	          lg: 4.50
	        }
	      },
	      {
	        brand: "dos equis",
	        price: {
	          sm: 3.00,
	          lg: 4.50
	        }
	      },
	      {
	        brand: "tecate",
	        price: {
	          sm: 2.00,
	          lg: 3.50
	        }
	      }
	    ],
      bottle: [
        {
          brand: "budlight",
          price: 3.00
        },
        {
          brand: "corona",
          price: 3.00
        },
        {
          brand: "dos equis",
          price: 2.00
        },
        {
          brand: "tecate",
          price: 2.00
        }
      ]
    },
    liquor: {
      vodka: [
        {
          brand: "grey goose",
          price: {
            shot: 3.00,
            double: 5.50,
            bottle: 27.50
          }
        },
        {
          brand: "ciroc",
          price: {
            shot: 4.00,
            double: 7.50,
            bottle: 33.50
          }
        },
        {
          brand: "Skyy Vodka",
          price: {
            shot: 2.50,
            double: 4.50,
            bottle: 21.50
          }
        },
        {
          brand: "Absolut Vodka",
          price: {
            shot: 3.50,
            double: 7.00,
            bottle: 28.50
          }
        }
      ],
      tequila: [
        {
          brand: "patron",
          price: {
            shot: 4.00,
            double: 7.50,
            bottle: 28.50
          }
        },
        {
          brand: "Don Julio",
          price: {
            shot: 3.50,
            double: 6.50,
            bottle: 33.50
          }
        },
        {
          brand: "Tres Agaves",
          price: {
            shot: 5.50,
            double: 10.50,
            bottle: 45.50
          }
        },
        {
          brand: "sauza gold",
          price: {
            shot: 5.50,
            double: 10.50,
            bottle: 54.50
          }
        }
      ]
    }
	},
	food: {
		chicken: {
	    sandwich: [
	      {
	        type: "uh chicken",
	        price: 14.50
	      },
	    ]
	  }
	}
}

export default items;