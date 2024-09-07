class CRUDAPI {
  set(key, value) {
    this._setItem(key, JSON.stringify(value));
  }

  get(key) {
    const value = this._getItem(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key) {
    this._removeItem(key);
  }

  clear() {
    this._clear();
  }

  _setItem(key, value) {
    throw new Error("Метод '_setItem' не реализован");
  }

  _getItem(key) {
    throw new Error("Метод '_getItem' не реализован");
  }

  _removeItem(key) {
    throw new Error("Метод '_removeItem' не реализован");
  }

  _clear() {
    throw new Error("Метод '_clear' не реализован");
  }
}

class LocalStorage extends CRUDAPI {
  _setItem(key, value) {
    localStorage.setItem(key, value);
  }

  _getItem(key) {
    return localStorage.getItem(key);
  }

  _removeItem(key) {
    localStorage.removeItem(key);
  }

  _clear() {
    localStorage.clear();
  }
}

class CookieStorage extends CRUDAPI {
  _setItem(key, value, options) {
    this.#setCookie(key, value, options);
  }

  _getItem(key) {
    let matches = document.cookie.match(
      new RegExp("(?:^|; )" +
        key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)",
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  _removeItem(key) {
    this.#setCookie(key, "", { "max-age": -1 });
  }

  _clear() {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
      const [key] = cookies[i].split("=");
      this._removeItem(key);
    }
  }

  #setCookie(name, value, options = {}) {
    options = { path: "/", ...options };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }
}

const ls = new LocalStorage();
ls.set('a', 42);
console.log(ls.get('a')) // 42;

const cookie = new CookieStorage();
cookie.set('a', 42);
console.log(cookie.get('a')) // 42;
