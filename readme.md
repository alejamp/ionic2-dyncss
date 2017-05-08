## Install
Clone repo.
Then execute `npm install`

## Add CSS
In order to add new themes, use this folder: `src/theme/css/`.
Any file inside that folder will be copy to `www/assets/css`.

Copy settings are in `config/config-copy.js`

Theme names must be name-theme.css for example: avon-theme.css or blue-theme.css

default.css is empty, then only Ionic default styles will show up if no theme is loaded.

## CSS Injector

`CssInjector` is a service declared in `src/providers/css-injector.ts` you can do DI on any component where yo need it.
In order to load a CSS from anywhere, do DI 

```javascript
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public cssInjector: CssInjector) {
  }
```

Then 
```javascript
    this.cssInjector.injectTheme('blue');
```
it will load blue-theme.css from www/assets/css

or you can use a more generic method:
```javascript
this.cssInjector.injectCSS (url:string){
```
