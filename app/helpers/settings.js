import { helper } from '@ember/component/helper';

function equals(args) {
  let [param1, param2] = args;
  debuuger;
  return param1 == param2;
}

export default helper(equals);