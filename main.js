import { ToyReact, Component } from "./ToyReact";

// class MyComponent {}

// let a = (
//   <div name="a" id="ida">
//     <span>Hello</span>
//     <span>Word</span>
//     <span>!</span>
//   </div>
// );
class MyComponent extends Component {
    render () {
        return (<div>
            <span>Hello</span>
            <span>Word</span>
            <div>
                {true}
                {this.children}
            </div>
        </div>);
    }
}
let a = (
    <MyComponent name="a" id="ida">
        <div>123</div>
    </MyComponent>
);

ToyReact.render(a, document.body);

// console.log(a);
// document.body.appendChild(a);
