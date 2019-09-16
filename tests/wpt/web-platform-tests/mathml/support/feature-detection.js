// This is a helper for MathML feature detection.
// It is indented to be used to prevent false negative test results.

var MathMLFeatureDetection = {

    "has_annotation": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_annotation-xml": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_maction": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_math": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_menclose": function() {
        if (!this.hasOwnProperty("_has_menclose")) {
            document.body.insertAdjacentHTML("beforeend", "<math>\
<mrow style='font-size: 20px !important'>\
  <mrow>\
    <mrow>\
      <mrow>\
        <mtext>A</mtext>\
      </mrow>\
    </mrow>\
  </mrow>\
</mrow>\
<menclose notation='box' style='font-size: 20px !important'>\
  <menclose notation='box'>\
    <menclose notation='box'>\
      <menclose notation='box'>\
        <mtext>A</mtext>\
      </menclose>\
    </menclose>\
  </menclose>\
</menclose>\
</math>");
            var math = document.body.lastElementChild;
            // The boxes will make menclose wider than mrow, if the former is supported.
            this._has_menclose =
                math.lastElementChild.getBoundingClientRect().width -
                math.firstElementChild.getBoundingClientRect().width > 5;
            document.body.removeChild(math);
        }
        return this._has_menclose;
    },

    "has_merror": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mfrac": function() {
        if (!this.hasOwnProperty("_has_mfrac")) {
            // Use tall enough fraction to avoid side effect of min num/denum shifts.
            document.body.insertAdjacentHTML("beforeend", "<math>\
<mfrac>\
  <mspace height='50px' depth='50px'></mspace>\
  <mspace height='50px' depth='50px'></mspace>\
</mfrac>\
<mfrac>\
  <mspace height='60px' depth='60px'></mspace>\
  <mspace height='60px' depth='60px'></mspace>\
</mfrac>\
</math>");
            var math = document.body.lastElementChild;
            var mfrac = math.getElementsByTagName("mfrac");
            // height/depth will add 40px per MathML, 20px if mfrac does not stack its children and none if mspace is not supported.
            this._has_mfrac =
                mfrac[1].getBoundingClientRect().height -
                mfrac[0].getBoundingClientRect().height > 30;
            document.body.removeChild(math);
        }
        return this._has_mfrac;
    },

    "has_mi": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mmultiscripts": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mn": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mo": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mover": function() {
        // FIXME: Improve feature detection.
        return this.has_munderover();
    },

    "has_mpadded": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mphantom": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mprescripts": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mroot": function() {
        // FIXME: Improve feature detection.
        return this.has_msqrt();
    },

    "has_mrow": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_ms": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mspace": function() {
        // https://mathml-refresh.github.io/mathml-core/#space-mspace
        if (!this.hasOwnProperty("_has_mspace")) {
            document.body.insertAdjacentHTML("beforeend", "<math>\
<mspace></mspace>\
<mspace width='20px'></mspace>\
</math>");
            var math = document.body.lastElementChild;
            // The width attribute will add 20px per MathML and none if not supported.
            this._has_mspace =
                math.lastChild.getBoundingClientRect().width -
                math.firstChild.getBoundingClientRect().width > 10;
            document.body.removeChild(math);
        }
        return this._has_mspace;
    },

    "has_msqrt": function() {
        if (!this.hasOwnProperty("_has_msqrt")) {
            document.body.insertAdjacentHTML("beforeend", "<math>\
<mrow style='font-size: 20px !important'>\
  <mtext>A</mtext>\
</mrow>\
<msqrt style='font-size: 20px !important'>\
  <mtext>A</mtext>\
</msqrt>\
</math>");
            var math = document.body.lastElementChild;
            // The radical symbol will make msqrt wider than mrow, if the former is supported.
            this._has_msqrt =
                math.lastElementChild.getBoundingClientRect().width -
                math.firstElementChild.getBoundingClientRect().width > 5;
            document.body.removeChild(math);
        }
        return this._has_msqrt;
    },

    "has_mstyle": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_msub": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_msubsup": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_msup": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mtable": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mtd": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mtext": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_mtr": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_munder": function() {
        // FIXME: Improve feature detection.
        return this.has_munderover();
    },

    "has_munderover": function() {
        if (!this.hasOwnProperty("_has_munderover")) {
            document.body.insertAdjacentHTML("beforeend", "<math>\
<munderover>\
  <mspace width='20px'></mspace>\
  <mspace width='20px'></mspace>\
  <mspace width='20px'></mspace>\
</munderover>\
<munderover>\
  <mspace width='40px'></mspace>\
  <mspace width='40px'></mspace>\
  <mspace width='40px'></mspace>\
</munderover>\
</math>");
            var math = document.body.lastElementChild;
            var munderover = math.getElementsByTagName("munderover");
            // width_delta will be 20px per MathML, 3 * 20 = 60px if mundeover does not stack its children and 0px if mspace is not supported.
            var width_delta =
                munderover[1].getBoundingClientRect().width -
                munderover[0].getBoundingClientRect().width;
            this._has_munderover = width_delta > 10 && width_delta < 30;
            document.body.removeChild(math);
        }
        return this._has_munderover;
    },

    "has_none": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_semantics": function() {
        // FIXME: Improve feature detection.
        return this.has_mspace();
    },

    "has_dir": function() {
        if (!this.hasOwnProperty("_has_dir")) {
            document.body.insertAdjacentHTML("beforeend", "<math style='direction: ltr !important;'>\
<mtext dir='rtl'></mtext>\
</math>");
            var math = document.body.lastElementChild;
            this._has_dir =
                window.getComputedStyle(math.firstElementChild).
                getPropertyValue('direction') === 'rtl';
            document.body.removeChild(math);
        }
        return this._has_dir;
    },

    "has_operator_spacing": function() {
        // https://mathml-refresh.github.io/mathml-core/#dfn-lspace
        // https://mathml-refresh.github.io/mathml-core/#layout-of-mrow
        if (!this.hasOwnProperty("_has_operator_spacing")) {
            document.body.insertAdjacentHTML("beforeend", "<math>\
<mrow>\
  <mn>1</mn><mo lspace='0px' rspace='0px'>+</mo><mn>2</mn>\
</mrow>\
<mrow>\
  <mn>1</mn><mo lspace='8px' rspace='8px'>+</mo><mn>2</mn>\
</mrow>\
</math>");
            var math = document.body.lastElementChild;
            var mrow = math.getElementsByTagName("mrow");
            // lspace/rspace will add 16px per MathML and none if not supported.
            this._has_operator_spacing =
                mrow[1].getBoundingClientRect().width -
                mrow[0].getBoundingClientRect().width > 10;
            document.body.removeChild(math);
        }
        return this._has_operator_spacing;
    },

    ensure_for_match_reftest: function(has_function) {
        if (!document.querySelector("link[rel='match']"))
            throw "This function must only be used for match reftest";
        // Add a little red square at the top left corner if the feature is not supported in order to make match reftest fail.
        if (!this[has_function]()) {
            document.body.insertAdjacentHTML("beforeend", "\
<div style='width: 10px !important; height: 10px !important;\
            position: absolute !important;\
            left: 0 !important; top: 0 !important;\
            background: red !important; z-index: 1000 !important;'></div>");
        }
    }
};
