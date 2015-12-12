/* start module: pyjamas.ui.HorizontalSlider */
$pyjs['loaded_modules']['pyjamas.ui.HorizontalSlider'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HorizontalSlider']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HorizontalSlider'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HorizontalSlider'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HorizontalSlider>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HorizontalSlider';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HorizontalSlider'] = $pyjs['loaded_modules']['pyjamas.ui.HorizontalSlider'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['VerticalSlider'] = $p['___import___']('pyjamas.ui.VerticalSlider.VerticalSlider', 'pyjamas.ui', null, false);
	$m['HorizontalSlider'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.HorizontalSlider';
		$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value, step) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				min_value = arguments[1];
				max_value = arguments[2];
				start_value = arguments[3];
				step = arguments[4];
				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof step != 'undefined') {
					if (step !== null && typeof step['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = step;
						step = arguments[5];
					}
				} else 				if (typeof start_value != 'undefined') {
					if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = start_value;
						start_value = arguments[5];
					}
				} else 				if (typeof max_value != 'undefined') {
					if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = max_value;
						max_value = arguments[5];
					}
				} else 				if (typeof min_value != 'undefined') {
					if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = min_value;
						min_value = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][5][1];
			if (typeof step == 'undefined') step=arguments['callee']['__args__'][6][1];

			$pyjs_kwargs_call($m['VerticalSlider'], '__init__', null, kwargs, [{}, self, min_value, max_value, start_value, step]);
			self['setHandleStyle'](null, '10px', '100%', null);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['min_value'],['max_value'],['start_value', null],['step', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('moveControl', function(mouse_x, mouse_y, first_move) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mouse_x = arguments[1];
				mouse_y = arguments[2];
				first_move = arguments[3];
			}
			if (typeof first_move == 'undefined') first_move=arguments['callee']['__args__'][5][1];
			var new_value,$mul1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,val_diff,$div2,$div3,$div1,length_range,$mul2,$div4,handle_width,$add2,$add1,relative_x,widget_width;
			handle_width = $m['DOM']['getIntAttribute']($p['getattr'](self, 'handle'), 'offsetWidth');
			widget_width = self['getOffsetWidth']();
			length_range = $p['__op_sub']($sub1=widget_width,$sub2=10);
			relative_x = $p['__op_sub']($sub3=mouse_x,$sub4=(typeof ($div1=handle_width)==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			if ($p['bool'](($p['cmp'](relative_x, 0) == -1))) {
				relative_x = 0;
			}
			if ($p['bool'](((($p['cmp'](relative_x, length_range))|1) == 1))) {
				relative_x = length_range;
			}
			val_diff = $p['__op_sub']($sub5=$p['getattr'](self, 'max_value'),$sub6=$p['getattr'](self, 'min_value'));
			new_value = $p['__op_add']($add1=(typeof ($div3=(typeof ($mul1=val_diff)==typeof ($mul2=relative_x) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))==typeof ($div4=length_range) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)),$add2=$p['getattr'](self, 'min_value'));
			new_value = self['processValue'](new_value);
			self['setControlPos'](new_value);
			self['setValue'](new_value);
			return null;
		}
	, 1, [null,null,['self'],['mouse_x'],['mouse_y'],['first_move', false]]);
		$cls_definition['moveControl'] = $method;
		$method = $pyjs__bind_method2('setControlPos', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $div6,val_diff,$sub12,$sub10,$mul3,$sub9,$sub8,relative_x,$sub11,$mul4,$sub7,widget_width,length_range,$div5;
			widget_width = self['getOffsetWidth']();
			length_range = $p['__op_sub']($sub7=widget_width,$sub8=10);
			val_diff = $p['__op_sub']($sub9=$p['getattr'](self, 'max_value'),$sub10=$p['getattr'](self, 'min_value'));
			relative_x = (typeof ($div5=(typeof ($mul3=length_range)==typeof ($mul4=$p['__op_sub']($sub11=value,$sub12=$p['getattr'](self, 'min_value'))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($div6=val_diff) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			if ($p['bool'](($p['cmp'](relative_x, 0) == -1))) {
				relative_x = 0;
			}
			if ($p['bool'](((($p['cmp'](relative_x, length_range))|1) == 1))) {
				relative_x = length_range;
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'left', $p['sprintf']('%dpx', relative_x));
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'position', 'absolute');
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setControlPos'] = $method;
		var $bases = new Array($m['VerticalSlider']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HorizontalSlider', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HorizontalSlider', 'HorizontalSlider', $m['HorizontalSlider']);
	return this;
}; /* end pyjamas.ui.HorizontalSlider */


/* end module: pyjamas.ui.HorizontalSlider */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.VerticalSlider.VerticalSlider', 'pyjamas.ui', 'pyjamas.ui.VerticalSlider']
*/
