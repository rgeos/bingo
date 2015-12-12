/* start module: pyjamas.ui.HorizontalPanel */
$pyjs['loaded_modules']['pyjamas.ui.HorizontalPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HorizontalPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HorizontalPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HorizontalPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HorizontalPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HorizontalPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HorizontalPanel'] = $pyjs['loaded_modules']['pyjamas.ui.HorizontalPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
	$m['HorizontalPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.HorizontalPanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
			self['tableRow'] = $m['DOM']['createTR']();
			$m['DOM']['appendChild'](self['getBody'](), $p['getattr'](self, 'tableRow'));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];
			var td;
			if ($p['bool']($p['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			if ($p['bool']((beforeIndex === null))) {
				beforeIndex = container;
				container = $p['getattr'](self, 'tableRow');
			}
			if ($p['bool']($p['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			widget['removeFromParent']();
			td = $m['DOM']['createTD']();
			$m['DOM']['insertChild'](container, td, beforeIndex);
			$m['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
			self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td;
			if ($p['bool']($p['isinstance'](widget, $p['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			td = $m['DOM']['getParent'](widget['getElement']());
			$m['DOM']['removeChild']($p['getattr'](self, 'tableRow'), td);
			$m['CellPanel']['remove'](self, widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HorizontalPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HorizontalPanel', 'HorizontalPanel', $m['HorizontalPanel']);
	return this;
}; /* end pyjamas.ui.HorizontalPanel */


/* end module: pyjamas.ui.HorizontalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel']
*/
