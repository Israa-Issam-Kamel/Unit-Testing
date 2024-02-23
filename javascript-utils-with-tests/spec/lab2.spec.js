
const User = require('../lab2'); 

describe('User class', () => {
    let user;

    beforeEach(() => {
        // Create a new user instance before each test
        console.log("Before each test...");
        user = new User('testUser', 'password123');
    });

    it('should add a product to the cart', () => {
        const product = { name: 'Product 1', price: 10 };
        user.addToCart(product);
        expect(user.cart).toContain(product);
    });

    it('should calculate the total cart price correctly', () => {
        user.addToCart({ name: 'Product 1', price: 10 });
        user.addToCart({ name: 'Product 2', price: 20 });
        expect(user.calculateTotalCartPrice()).toBe(30);
    });

    it('should successfully process payment with valid payment info', () => {
        // Mock paymentModel methods
        const paymentModel = {
            goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
            returnBack: jasmine.createSpy('returnBack'),
            isVerify: jasmine.createSpy('isVerify').and.returnValue(true) // Always return true for simplicity
        };
    
        expect(user.checkout(paymentModel)).toBe(true);
    
        // Ensure paymentModel methods are called
        expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
        expect(paymentModel.returnBack).toHaveBeenCalled();
        expect(paymentModel.isVerify).toHaveBeenCalled();
    });
    
    it('should fail to process payment with invalid payment info', () => {
        // Mock paymentModel methods
        const paymentModel = {
            goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
            returnBack: jasmine.createSpy('returnBack'),
            isVerify: jasmine.createSpy('isVerify').and.returnValue(false) // Always return false for simplicity
        };
    
        expect(user.checkout(paymentModel)).toBe(false);
    
        // Ensure paymentModel methods are called
        expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
        expect(paymentModel.returnBack).toHaveBeenCalled();
        expect(paymentModel.isVerify).toHaveBeenCalled();
    });
    
   afterEach(() => {
  // This runs after each test in this suite
  console.log("After each test...");
});
});
