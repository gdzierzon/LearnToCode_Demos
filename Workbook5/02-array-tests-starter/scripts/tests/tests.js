let should = chai.should();
let expect = chai.expect;

const numbers = [15, 81, 32, 1, 111, 9, 67, 5];

const menuItems = [
  {
    id: 1,
    name: "Big Mac",
    category: "Entree",
    price: 4.99
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    category: "Entree",
    price: 3.99
  },
  {
    id: 3,
    name: "Whopper",
    category: "Entree",
    price: 5.49
  },
  {
    id: 4,
    name: "Double Cheeseburger",
    category: "Entree",
    price: 2.99
  },
  {
    id: 5,
    name: "Subway Club",
    category: "Entree",
    price: 6.49
  },
  {
    id: 6,
    name: "Coca-Cola",
    category: "Drink",
    price: 1.49
  },
  {
    id: 7,
    name: "Sprite",
    category: "Drink",
    price: 1.49
  },
  {
    id: 8,
    name: "Iced Tea",
    category: "Drink",
    price: 1.29
  },
  {
    id: 9,
    name: "Fries",
    category: "Side",
    price: 1.99
  },
  {
    id: 10,
    name: "Onion Rings",
    category: "Side",
    price: 2.49
  },
  {
    id: 11,
    name: "Milkshake",
    category: "Dessert",
    price: 3.49
  },
  {
    id: 12,
    name: "Sundae",
    category: "Dessert",
    price: 2.99
  },
  {
    id: 13,
    name: "Apple Pie",
    category: "Dessert",
    price: 1.29
  },
  {
    id: 14,
    name: "Chocolate Chip Cookie",
    category: "Dessert",
    price: 1.49
  },
  {
    id: 15,
    name: "Soft Serve Ice Cream",
    category: "Dessert",
    price: 1.99
  }
];

describe('Array Tests', () => {

  describe('Numeric Arrays', () => {
    
    describe('calculateSum(numbers)', () => {
          
        it("should return the sum of all numbers", () => {
          const result = calculateSum(numbers)
          result.should.equal(321);
        });
    })
    
    describe('calculateMin(numbers)', () => {
          
        it("should return the smallest number", () => {
          const result = calculateMin(numbers)
          result.should.equal(1);
        });
    })
    
    describe('calculateMax(numbers)', () => {
          
        it("should return the largest number", () => {
          const result = calculateMax(numbers)
          result.should.equal(111);
        });
    })
    
    describe('calculateAverage(numbers)', () => {
          
        it("should return the average of all numbers", () => {
          const result = calculateAverage(numbers)
          result.should.equal(40.13);
        });
    })

  })

  describe('Fast Food Menu Arrays', () => {

    describe('findMenuItemById(menuItems, id)', () => {

      it("should return the Apple Pie menu item for id 13", () => {
        const menuItem = findMenuItemById(menuItems, 13);
        should.exist(menuItem);
        menuItem.name.should.equal("Apple Pie");
        menuItem.category.should.equal("Dessert");
        menuItem.price.should.equal(1.29);
      })
    })
    

    describe('getEntrees(menuItems)', () => {

      it("should return all Entrees", () => {
        const entrees = getEntrees(menuItems);
        entrees.length.should.equal(5)
        entrees[0].name.should.equal("Big Mac");
        entrees[1].name.should.equal("Chicken Nuggets");
        entrees[2].name.should.equal("Whopper");
        entrees[3].name.should.equal("Double Cheeseburger");
        entrees[4].name.should.equal("Subway Club");
      })
    })
    

    describe('getMenuItemNames(menuItems)', () => {

      it("should return just the names of the menu items", () => {
        const names = getMenuItemNames(menuItems);
        names.length.should.equal(15)
        names[0].should.equal("Big Mac");
        names[1].should.equal("Chicken Nuggets");
        names[2].should.equal("Whopper");
        names[3].should.equal("Double Cheeseburger");
        names[4].should.equal("Subway Club");
        names[5].should.equal("Coca-Cola");
        names[6].should.equal("Sprite");
        names[7].should.equal("Iced Tea");
        names[8].should.equal("Fries");
        names[9].should.equal("Onion Rings");
        names[10].should.equal("Milkshake");
        names[11].should.equal("Sundae");
        names[12].should.equal("Apple Pie");
        names[13].should.equal("Chocolate Chip Cookie");
        names[14].should.equal("Soft Serve Ice Cream");
      })
    })


  })

});
