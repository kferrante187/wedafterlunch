import { Result } from './status-response';
describe('using the status response thing', () => {
  it('an example', () => {
    function doIt(x: number): Result<number> {
      if (x % 2 === 0) {
        return {
          status: 'OK',
          value: x + x,
        };
      } else {
        return {
          status: 'FAIL',
          message: 'Could no do that work',
        };
      }
    }
    // tagged union type.
    const response = doIt(2);

    if (response.status === 'OK') {
      expect(response.value).toBe(4);
    } else {
      fail();
    }

    const response2 = doIt(3);

    if (response2.status === 'OK') {
      fail();
    } else {
      expect(response2.message).toBe('Could no do that work');
    }

    expect(handleIt(response2)).toBe('No So Good');
    function handleIt(h: Result<number>) {
      switch (h.status) {
        case 'OK': {
          return 'That went ok!';
        }
        case 'FAIL': {
          return 'No So Good';
        }
      }
    }
  });
});
