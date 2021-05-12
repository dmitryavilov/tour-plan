/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var checkbox = form.querySelector('input[type=checkbox]'),\n      thanksMessage = document.getElementById('thanks'),\n      phone = form.querySelector('input[type=tel]'),\n      clubNames = form.querySelectorAll('input[name=club-name]'),\n      name = form.querySelector('input[name=name]');\n\n  var phoneValidation = function phoneValidation() {\n    phone.value = phone.value.match(/(\\+?([1-9]{1,2})*[-()]*\\d{6,9})/g);\n    phone.value = phone.value.split(',').join('');\n  };\n\n  var nameValidation = function nameValidation() {\n    var valueReplace = function valueReplace(elem) {\n      name.value = elem;\n    };\n\n    valueReplace(name.value.replace(/( |\\-){1}[a-z]( |\\-){1}/gi, ''));\n    valueReplace(name.value.replace(/\\d/gi, ''));\n    valueReplace(name.value.replace(/((\\-){2,}|)*((\\-){2,}|)*/gi, ''));\n    valueReplace(name.value.replace(/\\s+/gi, ' '));\n    valueReplace(name.value.replace(/( |^)[а-яё]/g, function (x) {\n      return x.toUpperCase();\n    }));\n    valueReplace(name.value.replace(/(\\w)/gi, ''));\n\n    try {\n      if (name.value.length < 2) {\n        name.value = '';\n      }\n\n      ;\n    } catch (_unused) {}\n\n    ;\n  };\n\n  var sendData = function sendData() {\n    var thanksText = document.getElementById('thanks-text');\n    var data;\n\n    var checkData = function checkData() {\n      console.log(name);\n\n      if (clubNames[0]) {\n        if (clubNames[0].checked) {\n          data = {\n            name: name !== null ? name.value : 'Имя не указано',\n            phone: phone.value,\n            club: 'Мозаика',\n            card: 'Карта не указана'\n          };\n        } else if (clubNames[1].checked) {\n          data = {\n            name: name !== null ? name.value : 'Имя не указано',\n            phone: phone.value,\n            club: 'Щелково',\n            card: 'Карта не указана'\n          };\n        }\n\n        ;\n      } else {\n        data = {\n          name: name.value !== null ? name.value : 'Имя не указано',\n          phone: phone.value,\n          card: 'Карта не указана'\n        };\n      }\n\n      ;\n    };\n\n    checkData();\n\n    var formWithCards = function formWithCards() {\n      var cards = form.querySelectorAll('input[name=card-type]');\n      cards.forEach(function (item) {\n        if (item.checked) {\n          switch (item.value) {\n            case '1':\n            case '1s':\n              data.card = '1 Месяц, Соло';\n              break;\n\n            case '6':\n            case '6s':\n              data.card = '6 Месяцев, Соло';\n              break;\n\n            case '9':\n            case '9s':\n              data.card = '9 Месяцев, Соло';\n              break;\n\n            case '12':\n            case '12s':\n              data.card = '12 Месяцев, Соло';\n              break;\n\n            case '12d':\n              data.card = '12 Месяцев, Дневная';\n              break;\n          }\n\n          ;\n        }\n\n        ;\n      });\n    };\n\n    formWithCards();\n\n    var toggleModal = function toggleModal() {\n      try {\n        form.closest('.popup').style.display = 'none';\n      } catch (_unused2) {}\n\n      ;\n      thanksMessage.style.display = 'block';\n    };\n\n    toggleModal();\n\n    var clearInputs = function clearInputs() {\n      form.querySelectorAll('input').forEach(function (item) {\n        item.value = '';\n      });\n\n      try {\n        checkbox.checked = false;\n      } catch (_unused3) {}\n\n      ;\n    };\n\n    thanksText.textContent = 'Загрузка';\n    fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    }).then(function (response) {\n      if (response.status === 200) {\n        thanksText.innerHTML = \"\\n                    \\u0412\\u0430\\u0448\\u0430 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0430 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0430. <br />\\n                    \\u041C\\u044B \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F \\u0441 \\u0432\\u0430\\u043C\\u0438 \\u0432 \\u0431\\u043B\\u0438\\u0436\\u0430\\u0439\\u0448\\u0435\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F.\\n                \";\n      } else {\n        thanksText.innerHTML = \"\\n                    \\u041F\\u0440\\u0438 \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043A\\u0435 \\u043F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430!. <br />\\n                    \\u0421\\u0442\\u0430\\u0442\\u0443\\u0441 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0438 \".concat(response.status, \".\\n                \");\n        throw new Error('status network not 200.');\n      }\n    }).then(function () {\n      clearInputs();\n    })[\"catch\"](function (error) {\n      clearInputs();\n      console.error(error);\n    });\n  };\n\n  phone.addEventListener('change', phoneValidation);\n\n  try {\n    name.addEventListener('change', nameValidation);\n  } catch (_unused4) {}\n\n  ;\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n\n    try {\n      if (!checkbox.checked) {\n        alert('Поставьте галочку!');\n        return;\n      }\n\n      ;\n    } catch (_unused5) {}\n\n    ;\n\n    try {\n      if (form.id == 'footer_form') {\n        if (clubNames[0].checked || clubNames[1].checked) {\n          sendData();\n        } else {\n          alert('Выберите клуб!');\n        }\n\n        ;\n      } else {\n        sendData();\n      }\n\n      ;\n    } catch (_unused6) {\n      sendData();\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e791adc6e77ad1b7a658")
/******/ })();
/******/ 
/******/ }
);