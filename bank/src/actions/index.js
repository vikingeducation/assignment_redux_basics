export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const TRANSFER = "TRANSFER";

let nextAccountId = 1;

export const createAccount = data => {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
};

export const deposit = data => {
  return {
    type: DEPOSIT,
    data
  };
};

export const withdraw = data => {
  return {
    type: WITHDRAW,
    data
  };
};

export const transfer = data => {
  return {
    type: TRANSFER,
    data
  };
};

export const viewAccount = data => {
  return {
    type: VIEW_ACCOUNT,
    data
  };
};
