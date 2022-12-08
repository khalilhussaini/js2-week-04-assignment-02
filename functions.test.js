import { isTheWordSplit } from './functions.js';

test('According to the given parameter, the result should be not possible', () => {
    let result = isTheWordSplit([
      'hicoders',
      'hi,code,hicoders,coder,hicode,hicoder',
      'code,coder,hi,hicode,hicoder,hicoders',
    ]);
    expect(result).toBe('not possible');
  });

