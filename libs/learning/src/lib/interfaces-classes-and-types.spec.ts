describe('interfaces', () => {
  it('using them', () => {
    interface Person {
      name: string;
      age?: number;
      emailAddress: string;
    }

    const sue: Person = {
      name: 'Sue',
      age: 43,
      emailAddress: 'sue@aol.com',
      phoneNumber: '999-9999',
    };

    interface Person {
      phoneNumber: string;
    }
    // interface CallablePerson extends Person {
    //   phoneNumber: string;
    // }
    const bob: Person = {
      name: 'Robert',
      emailAddress: 'rob@aol.com',
      phoneNumber: '555-1212',
    };

    expect(bob.name).toBe('Robert');
  });
});
describe('using types instead of interfaces', () => {
  it('using them', () => {
    type Person = {
      name: string;
      age?: number;
      emailAddress: string;
    };

    type CallablePerson = Person & { phoneNumber: string };

    const bob: CallablePerson = {
      name: 'Bob Smith',
      age: 42,
      emailAddress: 'bob@aol.com',
      phoneNumber: '555-1212',
    };

    expect(bob.age).toBe(42);
  });
});
