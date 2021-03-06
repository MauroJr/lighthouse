"use strict";
/**
Copyright 2016 The Chromium Authors. All rights reserved.
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
**/

require("./diagnostic.js");

'use strict';

global.tr.exportTo('tr.v.d', function () {
  /**
   * A Generic diagnostic can contain any Plain-Ol'-Data objects that can be
   * serialized using JSON.stringify(): null, boolean, number, string, array,
   * dict. Generic diagnostics cannot contain tr.v.Value objects!
   */
  class Generic extends tr.v.d.Diagnostic {
    /**
     * @param {*} value
     */
    constructor(value) {
      super();
      this.value = value;
    }

    asDictInto_(d) {
      d.value = this.value;
    }

    static fromDict(d) {
      return new Generic(d.value);
    }
  }

  tr.v.d.Diagnostic.register(Generic, {
    elementName: 'tr-v-ui-generic-diagnostic-span'
  });

  return {
    Generic: Generic
  };
});