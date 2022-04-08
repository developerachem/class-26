class Alert {
  static danger(meg) {
    return `<p class="alert alert-danger"> ${meg}</p>`;
  }
  static info(meg) {
    return `<p class="alert alert-info"> ${meg}</p>`;
  }
  static warning(meg) {
    return `<p class="alert alert-warning"> ${meg}</p>`;
  }
  static success(meg) {
    return `<p class="alert alert-success"> ${meg}</p>`;
  }
}
export default Alert;
