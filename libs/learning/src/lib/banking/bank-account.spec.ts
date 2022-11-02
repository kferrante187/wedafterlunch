import { BankAccount } from './bank-account';
import * as uuid from 'uuid';
describe('The Bank Account', () => {
  describe('New Accounts', () => {
    it('has the correct opening balance', () => {
      const account = new BankAccount();

      expect(account.balance).toBe(5000);
    });
  });

  describe('Making Deposits', () => {
    it('increases the balance', () => {
      // Recreate the whole world anew
      // Given (Arrange)
      const account = new BankAccount();
      const openingBalance = account.balance;
      const amountToDeposit = 100;

      // Do something - poke it, etc.
      // When (Act)
      account.deposit(amountToDeposit);

      // Test!
      // Then
      expect(account.balance).toBe(openingBalance + amountToDeposit);
    });
  });

  describe('Making Withdrawals', () => {
    it('decreases the balance', () => {
      // Recreate the whole world anew
      // Given (Arrange)
      const account = new BankAccount();
      const openingBalance = account.balance;
      const amountToWithdraw = 100;

      // Do something - poke it, etc.
      // When (Act)
      account.withdraw(amountToWithdraw);

      // Test!
      // Then
      expect(account.balance).toBe(openingBalance - amountToWithdraw);
    });
  });
});
describe('Getting the Last Transaction', () => {
  it('records your last transaction', () => {
    // Given
    const NOW = '1969-04-20T23:59:00.000Z';
    const mockedNow = new Date(NOW);
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockedNow as unknown as string);

    jest.spyOn(uuid, 'v4').mockReturnValue('867-5309');

    const account = new BankAccount();
    const amountToDeposit = 119.42;

    // When
    account.deposit(amountToDeposit);

    const lastTransaction = account.getLastTransaction();

    // Then
    expect(lastTransaction).toEqual({
      date: NOW,
      amount: amountToDeposit,
      type: 'Deposit',
      id: 'TX867-5309',
    });
  });
});

// { date: '2022-10-31...', type: 'Deposit', amount: 100}
