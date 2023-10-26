let should = chai.should();

describe('String Exercises', () => {
  
  // getFileExtension()
  describe('getFileExtension( filename )', () => {
        
    describe('Images', () => {
      it("should return 'jpg' for 'logo.jpg'", () => {
        const extension = getFileExtension("logo.jpg")
        extension.should.equal("jpg");
      });
      it("should return 'jpg' for 'LOGO.JPG'", () => {
        const extension = getFileExtension("logo.jpg")
        extension.should.equal("jpg");
      });
      it("should return 'png' for 'cat.png'", () => {
        const extension = getFileExtension("cat.png")
        extension.should.equal("png");
      });
      it("should return 'gif' for 'dancingHamster.GIF'", () => {
        const extension = getFileExtension("dancingHamster.GIF")
        extension.should.equal("gif");
      });
      it("should return 'jpg' for 'https://www.mysite.com/images/hamburger.jpg'", () => {
        const extension = getFileExtension("https://www.mysite.com/images/hamburger.jpg")
        extension.should.equal("jpg");
      });
    })
    
    describe('Spreadsheets', () => {
      it("should return 'xls' for 'finance.2023.xls'", () => {
        const extension = getFileExtension("finance.2023.xls")
        extension.should.equal("xls");
      });
      it("should return 'xlsx' for 'finance.2023.xlsx'", () => {
        const extension = getFileExtension("finance.2023.xlsx")
        extension.should.equal("xlsx");
      });
    })
    
    describe('Documents', () => {
      it("should return 'txt' for 'names.txt'", () => {
        const extension = getFileExtension("names.txt")
        extension.should.equal("txt");
      });
      it("should return 'doc' for 'essay.doc'", () => {
        const extension = getFileExtension("essay.doc")
        extension.should.equal("doc");
      });
      it("should return 'docx' for 'essay.docx'", () => {
        const extension = getFileExtension("essay.docx")
        extension.should.equal("docx");
      });
    })
   
  });

  // getFileType()
  describe('getFileType( filename )', () => {

    describe('Images', () => {
      it("should return 'image' for 'logo.jpg'", () => {
        const type = getFileType("logo.jpg");
        type.should.equal("image");
      });
      it("should return 'image' for 'cat.png'", () => {
        const type = getFileType("cat.png");
        type.should.equal("image");
      });
      it("should return 'image' for 'dancingHamster.gif'", () => {
        const type = getFileType("dancingHamster.gif");
        type.should.equal("image");
      });
    })

    describe('Spreadsheets', () => {
      it("should return 'spreadsheet' for 'finance.xls'", () => {
        const type = getFileType("finance.xls");
        type.should.equal("spreadsheet");
      });
      it("should return 'spreadsheet' for 'finance.xlsx'", () => {
        const type = getFileType("finance.xlsx");
        type.should.equal("spreadsheet");
      });
      it("should return 'spreadsheet' for 'prices.csv'", () => {
        const type = getFileType("prices.csv");
        type.should.equal("spreadsheet");
      });
    })

    describe('Documents', () => {
      it("should return 'document' for 'names.txt'", () => {
        const type = getFileType("names.txt");
        type.should.equal("document");
      });
      it("should return 'document' for 'essay.doc'", () => {
        const type = getFileType("essay.doc");
        type.should.equal("document");
      });
      it("should return 'document' for 'essay.docx'", () => {
        const type = getFileType("essay.docx");
        type.should.equal("document");
      });
    })
  });

  // getFirstName()
  describe('getFirstName( fullName )', () => {

    it("should return 'Thor' for 'Thor'", () => {
      const firstName = getFirstName("Thor");
      firstName.should.equal("Thor");
    })
    it("should return 'Iron' for 'Iron Man'", () => {
      const firstName = getFirstName("Iron Man");
      firstName.should.equal("Iron");
    })
    it("should return 'Black' for 'Black Widow'", () => {
      const firstName = getFirstName("Black Widow");
      firstName.should.equal("Black");
    })
    it("should return 'The' for '    The Incredible Hulk   '", () => {
      const firstName = getFirstName("    The Incredible Hulk   ");
      firstName.should.equal("The");
    })

  })
  

  // hasMiddleName()
  describe('hasMiddleName( fullName )', () => {

    it("should return FALSE for 'Samuel'", () => {
      hasMiddleName("Samuel").should.be.false;
    })
    it("should return FALSE for 'Emily Mitchell'", () => {
      hasMiddleName("Emily Mitchell").should.be.false;
    })
    it("should return TRUE for 'Benjamin Daniel Sanchez'", () => {
      hasMiddleName("Benjamin Daniel Sanchez").should.be.true;
    })

  })
  
});
