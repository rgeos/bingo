/* start module: pyjamas.ui.Control */
$pyjs['loaded_modules']['pyjamas.ui.Control'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Control']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Control'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Control'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Control>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Control';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Control'] = $pyjs['loaded_modules']['pyjamas.ui.Control'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['math'] = $p['___import___']('math', 'pyjamas.ui');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui', null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
	$m['GlassWidget'] = $p['___import___']('pyjamas.ui.GlassWidget', 'pyjamas.ui', null, false);
	$m['Control'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Control';
		$method = $pyjs__bind_method2('__init__', function(element, min_value, max_value, start_value, step) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				min_value = arguments[2];
				max_value = arguments[3];
				start_value = arguments[4];
				step = arguments[5];
				var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
						step = arguments[6];
					}
				} else 				if (typeof start_value != 'undefined') {
					if (start_value !== null && typeof start_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = start_value;
						start_value = arguments[6];
					}
				} else 				if (typeof max_value != 'undefined') {
					if (max_value !== null && typeof max_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = max_value;
						max_value = arguments[6];
					}
				} else 				if (typeof min_value != 'undefined') {
					if (min_value !== null && typeof min_value['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = min_value;
						min_value = arguments[6];
					}
				} else 				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[6];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[6];
					}
				} else {
				}
			}
			if (typeof start_value == 'undefined') start_value=arguments['callee']['__args__'][6][1];
			if (typeof step == 'undefined') step=arguments['callee']['__args__'][7][1];
			var $sub2,$div2,$sub1,$div1;
			self['min_value'] = min_value;
			self['max_value'] = max_value;
			if ($p['bool']((start_value === null))) {
				start_value = min_value;
			}
			if ($p['bool']((step === null))) {
				step = (typeof ($div1=$p['__op_sub']($sub1=$p['getattr'](self, 'max_value'),$sub2=$p['getattr'](self, 'min_value')))==typeof ($div2=20) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
			}
			self['step'] = step;
			self['value'] = start_value;
			self['valuechange_listeners'] = $p['list']([]);
			self['dragging'] = false;
			self['drag_enabled'] = false;
			kwargs['__setitem__']('TabIndex', kwargs['get']('TabIndex', 0));
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			$m['MouseHandler']['__init__'](self);
			$m['MouseWheelHandler']['__init__'](self, true);
			self['addMouseWheelListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element'],['min_value'],['max_value'],['start_value', null],['step', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isDragable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'drag_enabled');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isDragable'] = $method;
		$method = $pyjs__bind_method2('setDragable', function(dragable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dragable = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'drag_enabled'), dragable))) {
				return null;
			}
			if ($p['bool']($p['getattr'](self, 'drag_enabled'))) {
				self['removeKeyboardListener'](self);
			}
			else {
				self['addKeyboardListener'](self);
			}
			self['drag_enabled'] = dragable;
			return null;
		}
	, 1, [null,null,['self'],['dragable']]);
		$cls_definition['setDragable'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

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

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

 			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('processValue', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $add2,$add1,$mul1,$sub3,$div3,$mul2,$div4,$sub4;
			value = $m['math']['floor']((typeof ($div3=$p['__op_sub']($sub3=value,$sub4=$p['getattr'](self, 'min_value')))==typeof ($div4=$p['getattr'](self, 'step')) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)));
			value = $p['__op_add']($add1=(typeof ($mul1=value)==typeof ($mul2=$p['getattr'](self, 'step')) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)),$add2=$p['getattr'](self, 'min_value'));
			value = $p['max'](value, $p['getattr'](self, 'min_value'));
			value = $p['min'](value, $p['getattr'](self, 'max_value'));
			return value;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['processValue'] = $method;
		$method = $pyjs__bind_method2('setValue', function(new_value, notify) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_value = arguments[1];
				notify = arguments[2];
			}
			if (typeof notify == 'undefined') notify=arguments['callee']['__args__'][4][1];
			var $iter1_nextval,$iter1_type,$iter1_idx,old_value,$iter1_iter,listener,$iter1_array;
			old_value = $p['getattr'](self, 'value');
			self['value'] = new_value;
			if ($p['bool'](!$p['bool'](notify))) {
				return null;
			}
			$iter1_iter = $p['getattr'](self, 'valuechange_listeners');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				listener['onControlValueChanged'](self, old_value, new_value);
			}
			return null;
		}
	, 1, [null,null,['self'],['new_value'],['notify', 1]]);
		$cls_definition['setValue'] = $method;
		$method = $pyjs__bind_method2('addControlValueListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['valuechange_listeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addControlValueListener'] = $method;
		$method = $pyjs__bind_method2('removeControlValueListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['valuechange_listeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeControlValueListener'] = $method;
		$method = $pyjs__bind_method2('moveControl', function(x, y, first_move) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				first_move = arguments[3];
			}
			if (typeof first_move == 'undefined') first_move=arguments['callee']['__args__'][5][1];

 			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['first_move', false]]);
		$cls_definition['moveControl'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var mouse_y,mouse_x,$sub6,$add3,$sub8,$add6,$add4,$add5,$sub7,event,$sub5;
			self['setFocus'](true);
			event = $m['DOM']['eventGetCurrentEvent']();
			mouse_x = $p['__op_add']($add3=$m['DOM']['eventGetClientX'](event),$add4=$m['Window']['getScrollLeft']());
			mouse_y = $p['__op_add']($add5=$m['DOM']['eventGetClientY'](event),$add6=$m['Window']['getScrollTop']());
			self['moveControl']($p['__op_sub']($sub5=mouse_x,$sub6=self['getAbsoluteLeft']()), $p['__op_sub']($sub7=mouse_y,$sub8=self['getAbsoluteTop']()), true);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}
			var $sub10,$sub9,new_value,$mul4,$mul3;
			$p['printFunc'](['mouse wheel', sender, velocity], 1);
			if ($p['bool']($p['getattr'](self, 'dragging'))) {
				return null;
			}
			new_value = self['processValue']($p['__op_sub']($sub9=$p['getattr'](self, 'value'),$sub10=(typeof ($mul3=$p['getattr'](self, 'step'))==typeof ($mul4=velocity) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))));
			self['setControlPos'](new_value);
			self['setValue'](new_value);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $add10,$add7,$add8,$add9;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'dragging')))) {
				return null;
			}
			self['moveControl']($p['__op_add']($add7=x,$add8=$m['Window']['getScrollLeft']()), $p['__op_add']($add9=y,$add10=$m['Window']['getScrollTop']()));
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onLoseFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['endDragging']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLoseFocus'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $add14,$add11,$add12,$add13;
			self['setFocus'](true);
			$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'drag_enabled')))) {
				return null;
			}
			self['dragging'] = true;
			$m['GlassWidget']['show'](self);
			self['moveControl']($p['__op_add']($add11=x,$add12=$m['Window']['getScrollLeft']()), $p['__op_add']($add13=y,$add14=$m['Window']['getScrollTop']()), true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['endDragging']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['endDragging']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassLeave'] = $method;
		$method = $pyjs__bind_method2('endDragging', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'dragging')))) {
				return null;
			}
			self['dragging'] = false;
			$m['GlassWidget']['hide']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['endDragging'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $sub12,$add15,$add16,$sub11,new_value;
			if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')))) {
				$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
				new_value = self['processValue']($p['__op_add']($add15=$p['getattr'](self, 'value'),$add16=$p['getattr'](self, 'step')));
				self['setControlPos'](new_value);
				self['setValue'](new_value);
			}
			else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')))) {
				$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
				new_value = self['processValue']($p['__op_sub']($sub11=$p['getattr'](self, 'value'),$sub12=$p['getattr'](self, 'step')));
				self['setControlPos'](new_value);
				self['setValue'](new_value);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$method = $pyjs__bind_method2('_event_targets_control', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2,target;
			target = $m['DOM']['eventGetTarget'](event);
			return ($p['bool']($and1=target)?$m['DOM']['isOrHasChild'](self['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_control'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or5,$or4,$or6,$or1,$or3,$or2,etype;
			etype = $m['DOM']['eventGetType'](event);
			$p['printFunc'](['control preview', etype, self['_event_targets_control'](event), ($m['DOM']['getCaptureElement']() !== null)], 1);
			if ($p['bool']($p['op_eq'](etype, 'keydown'))) {
				return self['_event_targets_control'](event);
			}
			else if ($p['bool']($p['op_eq'](etype, 'keyup'))) {
				return self['_event_targets_control'](event);
			}
			else if ($p['bool']($p['op_eq'](etype, 'keypress'))) {
				return self['_event_targets_control'](event);
			}
			else if ($p['bool'](($p['bool']($or1=$p['op_eq'](etype, 'mousedown'))?$or1:$p['op_eq'](etype, 'blur')))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
				if ($p['bool'](!$p['bool'](self['_event_targets_control'](event)))) {
					return true;
				}
			}
			else if ($p['bool'](($p['bool']($or3=$p['op_eq'](etype, 'mouseup'))?$or3:($p['bool']($or4=$p['op_eq'](etype, 'click'))?$or4:($p['bool']($or5=$p['op_eq'](etype, 'mousemove'))?$or5:$p['op_eq'](etype, 'dblclick')))))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
			}
			else if ($p['bool']($p['op_eq'](etype, 'mouseout'))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return false;
				}
			}
			return self['_event_targets_control'](event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['MouseHandler'],$m['MouseWheelHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Control', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Control', 'Control', $m['Control']);
	return this;
}; /* end pyjamas.ui.Control */


/* end module: pyjamas.ui.Control */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'math', 'pyjamas.DOM', 'pyjamas.Window', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.GlassWidget']
*/
