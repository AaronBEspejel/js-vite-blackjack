# BlackJack Vite

Pagos para ejecutar proyecto:

1. Clonar repositorio
2. Ejecutar ```npm install``` para reconstruir los módulos de node
3. Correr el devServer ```npm run dev```
4. Abrir en la dirección local que indique la consola

## Producción

1. Ejecutar ```npm run build```
2. Tomar la carpeta ```dist``` y desplegarla
3. Si es el primer despliegue se deben ejecutar los siguiente comandos git:
3.1 git add .
3.2 git commit -m " ```Comentario para identificar repositorio``` "
3.3 git remote add origin ```url del depositorio a depositar en GitHub```
3.4 git push -u origin main

4. Para actualizar cambios ejecutar:
4.1 git add .
4.2 git commit -m " ```Leyenda de lo que se ha actualizado.``` " 
4.3 git push (ya no es necesario agregar -u origin main)

## Regresar a versión anterior.
1. Ejecutar git checkout -- .