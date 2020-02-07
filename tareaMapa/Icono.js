export class Icono extends L.Icon {
  constructor(url) {
    //llamamos a L.ICON
    super({
      options: {
        iconSize: [25, 25],
        popupAnchor: [0, -13]
      },
      //añadimos la caracteristica extra
      iconUrl: url
    });
  }
}
