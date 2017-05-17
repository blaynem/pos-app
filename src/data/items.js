const items = {
	alcohol: {
		beer: {
	    tap: [
	      {
          id: "101a",
	        brand: "budlight",
	        price: {
	          sm: 2.50,
	          lg: 4.00
	        }
	      },
	      {
          id: "201a",
	        brand: "corona",
	        price: {
	          sm: 3.00,
	          lg: 4.50
	        }
	      },
	      {
          id: "301a",
	        brand: "dos equis",
	        price: {
	          sm: 3.00,
	          lg: 4.50
	        }
	      },
	      {
          id: "401a",
	        brand: "tecate",
	        price: {
	          sm: 2.00,
	          lg: 3.50
	        }
	      }
	    ],
      bottle: [
        {
          id: "101b",
          brand: "budlight",
          price: 3.00
        },
        {
          id: "201b",
          brand: "corona",
          price: 3.00
        },
        {
          id: "301b",
          brand: "dos equis",
          price: 2.00
        },
        {
          id: "401b",
          brand: "tecate",
          price: 2.00
        }
      ]
    },
    liquor: {
      vodka: [
        {
          id: "501a",
          brand: "grey goose",
          price: {
            shot: 3.00,
            double: 5.50,
            bottle: 27.50
          }
        },
        {
          id: "601a",
          brand: "ciroc",
          price: {
            shot: 4.00,
            double: 7.50,
            bottle: 33.50
          }
        },
        {
          id: "701a",
          brand: "Skyy Vodka",
          price: {
            shot: 2.50,
            double: 4.50,
            bottle: 21.50
          }
        },
        {
          id: "801a",
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
          id: "901a",
          brand: "patron",
          price: {
            shot: 4.00,
            double: 7.50,
            bottle: 28.50
          }
        },
        {
          id: "1001a",
          brand: "Don Julio",
          price: {
            shot: 3.50,
            double: 6.50,
            bottle: 33.50
          }
        },
        {
          id: "1101a",
          brand: "Tres Agaves",
          price: {
            shot: 5.50,
            double: 10.50,
            bottle: 45.50
          }
        },
        {
          id: "1201a",
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