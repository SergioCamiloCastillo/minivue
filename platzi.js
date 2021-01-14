class PlatziReactive {
  constructor(options) {
    this.origen = options.data();
  }
  mount() {
    document.querySelectorAll("*[p-text]").forEach((el) => {
      this.pText(el, this.origen, el.getAttribute("p-text"));
    });
  }
  pText(el, target, name) {
    el.innerText = target[name];
  }
  pModel() {}
}
let Platzi = {
  createApp(options) {
    return new PlatziReactive(options);
  },
};
