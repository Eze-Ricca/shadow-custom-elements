### El titulo y el subtitulo ingresan su contenido por medio de sus atributos title y subtitle

```ts
<h1>${this.getAttribute("title")}</h1>
```

---

### El parrafo tamaño m y el parrafo tamaño n estan echos para que su contenido se lo ingrese entre su etiqueta

```ts
<p>
  <slot></slot>
</p>
```

---

### Los botones ingresan su contenido entre las etiquetas

```ts
<button>
  <slot></slot>
</button>
```

---

### el fieldset es estatico y solo trabaja con Nombre e Input

```ts
<div>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />
</div>
```

---

### El header y el footer son solo un div de color
