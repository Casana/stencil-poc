import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return  (
    <form name="loginForm" method="POST">
        <fieldset>
          <legend></legend>
          <span></span>
          <div>
            <label>Usuario</label>
            <input type="text" name="user"></input>
          </div>
          <div>
            <label>Contraseña</label>
            <input type="text" name="password"></input>
          </div>
          <a></a>
        </fieldset>
        <input type="submit" value="Entrar"></input>
        <a target='_blank' href="javascript:void(0)">¿Todavía no eres usuario? Regístrate</a>
      </form>);
  }
}
