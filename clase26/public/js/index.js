const formulario = document.querySelector('.aggUsuario');

const agregaLocalStorage = (usuario) => {
    try {
        if (!localStorage.getItem('usuario')) {
            localStorage.setItem('usuario', JSON.stringify([usuario]));
            return;
        }
        const usuarios = obtenerLocalStorage();
        usuarios.push(usuario);
        localStorage.setItem('usuario', JSON.stringify(usuarios));
    } catch (error) {
        console.error(error.message);
    }
}

const obtenerLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('usuario')) || [];
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

const Usuarios = () => {
    return {
        id: '',
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        url: '',

        Usuario: function (id, nombre, apellido, email, password, url) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.password = password;
            this.url = url;
        },

        getNombre: function () {
            return this.nombre;
        },

        jsonToHtml: function (estilos = null) {
            const tarjeta = document.createElement('div');
            const img = document.createElement('img');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');
            const btnEditar = document.createElement('button');
            const btnEliminar = document.createElement('button');

            if (estilos) {
                tarjeta.className = estilos;
            }

            if (this.url === '') {
                img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&';
            } else {
                img.src = this.url;
            }

            h5.textContent = `${this.nombre} ${this.apellido}`;
            p.textContent = this.email;

            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', () => editarUsuario(this.id));

            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener('click', () => eliminarUsuario(this.id));

            tarjeta.appendChild(img);
            tarjeta.appendChild(h5);
            tarjeta.appendChild(p);
            tarjeta.appendChild(btnEditar);
            tarjeta.appendChild(btnEliminar);

            return tarjeta;
        },

        getUsuario: function () {
            return {
                id: this.id,
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                password: this.password,
                url: this.url
            }
        },
    }
}

const editarUsuario = (id) => {
    const usuarios = obtenerLocalStorage();
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        document.querySelector('#nombre').value = usuario.nombre;
        document.querySelector('#apellido').value = usuario.apellido;
        document.querySelector('#email').value = usuario.email;
        document.querySelector('#password').value = usuario.password;
        document.querySelector('#img').value = usuario.url;

   
        const newUsuarios = usuarios.filter(u => u.id !== id);
        localStorage.setItem('usuario', JSON.stringify(newUsuarios));
    }
}

const eliminarUsuario = (id) => {
    const usuarios = obtenerLocalStorage();
    const newUsuarios = usuarios.filter(u => u.id !== id);
    localStorage.setItem('usuario', JSON.stringify(newUsuarios));
    renderUsuarios();
}

const renderUsuarios = () => {
    const section = document.querySelector('.usuarios');
    section.innerHTML = '';
    const usuarios = obtenerLocalStorage();
    usuarios.forEach(user => {
        const usuario = Usuarios();
        usuario.Usuario(user.id, user.nombre, user.apellido, user.email, user.password, user.url);
        section.appendChild(usuario.jsonToHtml());
    });
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = Usuarios();
    const id = Date.now().toString(); 
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const img = document.querySelector('#img').value;

    usuario.Usuario(id, nombre, apellido, email, password, img);
    agregaLocalStorage(usuario.getUsuario());

    renderUsuarios();

    formulario.reset();
});

document.addEventListener('DOMContentLoaded', renderUsuarios);
