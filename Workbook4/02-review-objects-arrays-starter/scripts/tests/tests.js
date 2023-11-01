let should = chai.should();

describe('Objects Exercises', () => {
  
  describe('createLabel( name, address, city, state, zip )', () => {
        
    it("should create a label object", () => {
      const label = createLabel("Grant Johnson", "123 Main", "SLC","UT",84111);

      label.name.should.equal("Grant Johnson");
      label.address.should.equal("123 Main");
      label.city.should.equal("SLC");
      label.state.should.equal("UT");
      label.zip.should.equal(84111);
    });
  });
  
  describe('parsePartCode( code )', () => {
        
    it("should create a label object", () => {
      const part = parsePartCode("XYZ:1234-L");

      part.supplierCode.should.equal("XYZ");
      part.productNumber.should.equal("1234");
      part.size.should.equal("L");
    });
  });

  
  describe('createReservation( roomType, checkinDate, numberOfNights, discount )', () => {
        
    it("should create reservation without a discount and off peak season rate ", () => {
      const reservation = createReservation("Queen",new Date(2023,4,15),2,0)
      reservation.roomType.should.equal("Queen");
      reservation.roomRate.should.equal(150);
      reservation.numberOfNights.should.equal(2);
      reservation.discountAmount.should.equal(0);
      reservation.subTotal.should.equal(300);
      reservation.total.should.equal(300);
    }); 

    it("should create reservation WITH a discount and off peak season rate ", () => {
      const reservation = createReservation("Queen",new Date(2023,4,15),2,.1)
      reservation.roomType.should.equal("Queen");
      reservation.roomRate.should.equal(150);
      reservation.numberOfNights.should.equal(2);
      reservation.discountAmount.should.equal(30);
      reservation.subTotal.should.equal(300);
      reservation.total.should.equal(270);
    });   

    it("should create reservation without a discount and ON peak season rate ", () => {
      const reservation = createReservation("Queen",new Date(2023,6,15),2,0)
      reservation.roomType.should.equal("Queen");
      reservation.roomRate.should.equal(250);
      reservation.numberOfNights.should.equal(2);
      reservation.discountAmount.should.equal(0);
      reservation.subTotal.should.equal(500);
      reservation.total.should.equal(500);
    }); 
       
    it("should create reservation WITH a discount and ON peak season rate ", () => {
      const reservation = createReservation("Queen",new Date(2023,6,15),2,.1)
      reservation.roomType.should.equal("Queen");
      reservation.roomRate.should.equal(250);
      reservation.numberOfNights.should.equal(2);
      reservation.discountAmount.should.equal(50);
      reservation.subTotal.should.equal(500);
      reservation.total.should.equal(450);
    });
  });

  
});


describe('Array Exercises', () => {
  
  describe('calculateSum( numbers )', () => {
        
      it("should return 6 for array [1,2,3]", () => {
        const sum = calculateSum([1,2,3])
        sum.should.equal(6);
      });
  });

  
});
