/* start module: pyjamas.ui.VerticalSlider */
$pyjs['loaded_modules']['pyjamas.ui.VerticalSlider'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.VerticalSlider']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.VerticalSlider'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.VerticalSlider'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.VerticalSlider>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalSlider';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['VerticalSlider'] = $pyjs['loaded_modules']['pyjamas.ui.VerticalSlider'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	$m['Control'] = $p['___import___']('pyjamas.ui.Control.Control', 'pyjamas.ui', null, false);
	$m['VerticalSlider'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.VerticalSlider';
		$method = $pyjs__bind_method2('__init__', function(min_value, max_value, start_value, step) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var ka = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					var ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				min_value = arguments[1];
				max_value = arguments[2];
				start_value = arguments[3];
				step = arguments[4];
				var ka = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof step != 'undefined') {
					if (step !== null && typeof step['$pyjs_is_kwarg'] != 'undefined') {
						ka = step;
						step = arguments[5];
					}
				} else 				if (typeof start_value != 'undefined') {
					if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
						ka = start_value;
						start_value = arguments[5];
					}
				} else 				if (typeof max_value != 'undefined') {
					if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
						ka = max_value;
						max_value = arguments[5];
					}
				} else 				if (typeof min_value != 'undefined') {
					if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
						ka = min_value;
						min_value = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][5][1];
			if (typeof step == 'undefined') step=arguments['callee']['__args__'][6][1];
			var $or1,$or2,element;
			ka['__setitem__']('StyleName', ka['get']('StyleName', 'gwt-VerticalSlider'));
			element = ($p['bool']($or1=ka['pop']('Element', null))?$or1:$m['Focus']['createFocusable']());
			$m['DOM']['setStyleAttribute'](element, 'position', 'relative');
			$m['DOM']['setStyleAttribute'](element, 'overflow', 'hidden');
			self['handle'] = $m['DOM']['createDiv']();
			$m['DOM']['appendChild'](element, $p['getattr'](self, 'handle'));
			self['setHandleStyle']('1px', '100%', '10px', '#808080');
			$pyjs_kwargs_call($m['Control'], '__init__', null, ka, [{}, self, element, min_value, max_value, start_value, step]);
			self['addClickListener'](self);
			self['addFocusListener'](self);
			self['addMouseListener'](self);
			return null;
		}
	, 1, [null,['ka'],['self'],['min_value'],['max_value'],['start_value', null],['step', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setHandleStyle', function(border, width, height, backgroundColor) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				border = arguments[1];
				width = arguments[2];
				height = arguments[3];
				backgroundColor = arguments[4];
			}

			if ($p['bool']((border !== null))) {
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'border', border);
			}
			if ($p['bool']((width !== null))) {
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'width', width);
			}
			if ($p['bool']((height !== null))) {
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'height', height);
			}
			if ($p['bool']((backgroundColor !== null))) {
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'backgroundColor', backgroundColor);
			}
			return null;
		}
	, 1, [null,null,['self'],['border'],['width'],['height'],['backgroundColor']]);
		$cls_definition['setHandleStyle'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['addStyleName']('gwt-VerticalSlider-focussed');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method2('onLostFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['removeStyleName']('gwt-VerticalSlider-focussed');
			self['dragging'] = false;
			$m['DOM']['releaseCapture'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
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
			var handle_height,new_value,$sub8,$div4,widget_height,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,val_diff,$div2,$div3,$div1,$mul2,$mul1,height_range,$add2,$add1,relative_y;
			handle_height = $m['DOM']['getIntAttribute']($p['getattr'](self, 'handle'), 'offsetHeight');
			widget_height = self['getOffsetHeight']();
			height_range = $p['__op_sub']($sub1=widget_height,$sub2=10);
			relative_y = $p['__op_sub']($sub3=mouse_y,$sub4=(typeof ($div1=handle_height)==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			if ($p['bool'](($p['cmp'](relative_y, 0) == -1))) {
				relative_y = 0;
			}
			if ($p['bool'](((($p['cmp'](relative_y, height_range))|1) == 1))) {
				relative_y = height_range;
			}
			relative_y = $p['__op_sub']($sub5=height_range,$sub6=relative_y);
			val_diff = $p['__op_sub']($sub7=$p['getattr'](self, 'max_value'),$sub8=$p['getattr'](self, 'min_value'));
			new_value = $p['__op_add']($add1=(typeof ($div3=(typeof ($mul1=val_diff)==typeof ($mul2=relative_y) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))==typeof ($div4=height_range) && typeof $div3=='number' && $div4 !== 0?
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
			var val_diff,height_range,$sub13,$sub12,$sub10,$sub16,$sub14,$sub9,$sub15,relative_y,widget_height,$mul4,$mul3,$sub11,$div6,$div5;
			widget_height = self['getOffsetHeight']();
			height_range = $p['__op_sub']($sub9=widget_height,$sub10=10);
			val_diff = $p['__op_sub']($sub11=$p['getattr'](self, 'max_value'),$sub12=$p['getattr'](self, 'min_value'));
			relative_y = (typeof ($div5=(typeof ($mul3=height_range)==typeof ($mul4=$p['__op_sub']($sub13=value,$sub14=$p['getattr'](self, 'min_value'))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($div6=val_diff) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			if ($p['bool'](($p['cmp'](relative_y, 0) == -1))) {
				relative_y = 0;
			}
			if ($p['bool'](((($p['cmp'](relative_y, height_range))|1) == 1))) {
				relative_y = height_range;
			}
			relative_y = $p['__op_sub']($sub15=height_range,$sub16=relative_y);
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'top', $p['sprintf']('%dpx', relative_y));
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'handle'), 'position', 'absolute');
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setControlPos'] = $method;
		var $bases = new Array($m['Control']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalSlider', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.VerticalSlider', 'VerticalSlider', $m['VerticalSlider']);
	return this;
}; /* end pyjamas.ui.VerticalSlider */


/* end module: pyjamas.ui.VerticalSlider */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Focus', 'pyjamas.ui', 'pyjamas.ui.Control.Control', 'pyjamas.ui.Control']
*/
