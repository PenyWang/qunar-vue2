const defaultValue = {
  curCity: localStorage.getItem('curCity') || '北京'
}

const state = {
  ...defaultValue,
};

export default state;