/* start module: pyjamas.ui.FlexCellFormatter */
$pyjs['loaded_modules']['pyjamas.ui.FlexCellFormatter'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FlexCellFormatter']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FlexCellFormatter'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FlexCellFormatter'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FlexCellFormatter>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlexCellFormatter';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['FlexCellFormatter'] = $pyjs['loaded_modules']['pyjamas.ui.FlexCellFormatter'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
	$m['FlexCellFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FlexCellFormatter';
		$method = $pyjs__bind_method2('__init__', function(outer) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				outer = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof outer != 'undefined') {
					if (outer !== null && typeof outer['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = outer;
						outer = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['CellFormatter'], '__init__', null, kwargs, [{}, self, outer]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['outer']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getColSpan', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](row, column), 'colSpan');
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getColSpan'] = $method;
		$method = $pyjs__bind_method2('getRowSpan', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](row, column), 'rowSpan');
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getRowSpan'] = $method;
		$method = $pyjs__bind_method2('setColSpan', function(row, column, colSpan) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				colSpan = arguments[3];
			}

			$m['DOM']['setIntAttribute'](self['ensureElement'](row, column), 'colSpan', colSpan);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['colSpan']]);
		$cls_definition['setColSpan'] = $method;
		$method = $pyjs__bind_method2('setRowSpan', function(row, column, rowSpan) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				rowSpan = arguments[3];
			}

			$m['DOM']['setIntAttribute'](self['ensureElement'](row, column), 'rowSpan', rowSpan);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['rowSpan']]);
		$cls_definition['setRowSpan'] = $method;
		var $bases = new Array($m['CellFormatter']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FlexCellFormatter', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.FlexCellFormatter */


/* end module: pyjamas.ui.FlexCellFormatter */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui', 'pyjamas.ui.CellFormatter']
*/
