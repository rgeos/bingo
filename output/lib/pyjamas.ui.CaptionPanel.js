/* start module: pyjamas.ui.CaptionPanel */
$pyjs['loaded_modules']['pyjamas.ui.CaptionPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.CaptionPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.CaptionPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.CaptionPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.CaptionPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CaptionPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['CaptionPanel'] = $pyjs['loaded_modules']['pyjamas.ui.CaptionPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['CaptionPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.CaptionPanel';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['caption', 'Caption', 'caption', null])]);
		$method = $pyjs__bind_method2('__init__', function(caption, widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				caption = arguments[1];
				widget = arguments[2];
				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof widget != 'undefined') {
					if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = widget;
						widget = arguments[3];
					}
				} else 				if (typeof caption != 'undefined') {
					if (caption !== null && typeof caption['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = caption;
						caption = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof widget == 'undefined') widget=arguments['callee']['__args__'][4][1];
			var element;
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createElement']('fieldset');
			}
			self['legend'] = $m['DOM']['createElement']('legend');
			$m['DOM']['appendChild'](element, $p['getattr'](self, 'legend'));
			kwargs['__setitem__']('Caption', caption);
			if ($p['bool']((widget !== null))) {
				kwargs['__setitem__']('Widget', widget);
			}
			if ($p['bool'](!$p['bool'](kwargs['__contains__']('StyleName')))) {
				kwargs['__setitem__']('StyleName', 'gwt-CaptionPanel');
			}
			$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, element]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['caption'],['widget', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['SimplePanel']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getCaption', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'caption');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCaption'] = $method;
		$method = $pyjs__bind_method2('setCaption', function(caption) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				caption = arguments[1];
			}
			var $and2,$and1;
			self['caption'] = caption;
			if ($p['bool'](($p['bool']($and1=(caption !== null))?!$p['bool']($p['op_eq'](caption, '')):$and1))) {
				$m['DOM']['setInnerHTML']($p['getattr'](self, 'legend'), caption);
				$m['DOM']['insertChild'](self['getElement'](), $p['getattr'](self, 'legend'), 0);
			}
			else if ($p['bool'](($m['DOM']['getParent']($p['getattr'](self, 'legend')) !== null))) {
				$m['DOM']['removeChild'](self['getElement'](), $p['getattr'](self, 'legend'));
			}
			return null;
		}
	, 1, [null,null,['self'],['caption']]);
		$cls_definition['setCaption'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CaptionPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.CaptionPanel', 'CaptionPanel', $m['CaptionPanel']);
	return this;
}; /* end pyjamas.ui.CaptionPanel */


/* end module: pyjamas.ui.CaptionPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel']
*/
