class PlatziReactive {

    constructor(options) {

        this.origen = options.data();

        // Destino
        this.$data = new Proxy(this.origen, {

            get(target, name) {

                if (Reflect.has(target, name))
                    return Reflect.get(target, name);

                console.warn(`La propiedad [${name}] no existe`);
                return "";

            },

            set(target, name, value) {
                console.log('hola');
                Reflect.set(target, name, value)

            }

        });

    }

    mount() {

        document.querySelectorAll("*[p-text]").forEach(el => {

            this.pText(el, this.$data, el.getAttribute("p-text"));

        });

        document.querySelectorAll("*[p-model]").forEach(el => {

            const name = el.getAttribute("p-model");
            this.pModel(el, this.$data, name);

            el.addEventListener("input", () => {
                Reflect.set(this.$data, name, this.value);
            });

        });

    }

    pText(el, target, name) {

        el.innerText = Reflect.get(target, name);

    }

    pModel(el, target, name) {

        el.value = Reflect.get(target, name);

    }

}

let Platzi = {

    createApp(options) {
        return new PlatziReactive(options);
    }

};