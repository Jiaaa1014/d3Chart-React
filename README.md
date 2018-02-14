# Notes

```bash
$ yarn add react-faux-dom d3 -S
```


## Refs

* [RXJS-DOM](https://github.com/Reactive-Extensions/RxJS-DOM)
* [RxJS三十天](https://ithelp.ithome.com.tw/users/20103367/ironman/1199)
* [D3(GitHub)](https://github.com/d3/d3)
* [d3(官方)](https://d3js.org/)
* [React-Faux-DOM](https://github.com/Olical/react-faux-dom)

[參考](https://blog.sicara.com/a-starting-point-on-using-d3-with-react-869fdf3dfaf)

React-Faux-DOM角色用來當作React以及d3的橋樑，React在更新元件的時候是修改虛擬元素(virtual DOM)，再重新渲染真正元素(real DOM)，問題是在於d3修改元素的時候不會在虛擬元素上有反應，這個時候就需要它建立`fake DOM`