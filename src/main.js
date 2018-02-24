import $ from 'jquery'
import Dog from './Dog'
//在 #root下面插入一句话,这句话由Dog的show方法输出
$('#root').text(Dog.show());