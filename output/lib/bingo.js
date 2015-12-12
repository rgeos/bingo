/* start module: bingo */
$pyjs['loaded_modules']['bingo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bingo']['__was_initialized__']) return $pyjs['loaded_modules']['bingo'];
	var $m = $pyjs['loaded_modules']['bingo'];
	$m['__repr__'] = function() { return '<module: bingo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bingo';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['HorizontalSlider'] = $p['___import___']('pyjamas.ui.HorizontalSlider.HorizontalSlider', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['CaptionPanel'] = $p['___import___']('pyjamas.ui.CaptionPanel.CaptionPanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['random'] = $p['___import___']('random.random', null, null, false);
	$m['datetime'] = $p['___import___']('datetime.datetime', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['r'] = $pyjs['loaded_modules']['random'];
	$m['num_gen'] = function() {
		var arr;
		arr = $p['range'](1, 91);
		$m['r']['shuffle'](arr);
		return arr;
	};
	$m['num_gen']['__name__'] = 'num_gen';

	$m['num_gen']['__bind_type__'] = 0;
	$m['num_gen']['__args__'] = [null,null];
	$m['num'] = $m['num_gen']();
	$m['PopupTimerButton'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bingo';
		$method = $pyjs__bind_method2('__init__', function(countdown) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				countdown = arguments[1];
			}

			$m['Timer']['__init__'](self);
			$m['Button']['__init__'](self);
			self['countdown_save'] = countdown;
			self['addClickListener'](self);
			self['box'] = $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{'StyleName':'popupbox'}]);
			self['reset']();
			return null;
		}
	, 1, [null,null,['self'],['countdown']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub2,$sub1;
			self['setHTML']($p['sprintf']('Popup in <b>%d</b> seconds! (Click to cancel)', $p['getattr'](self, 'countdown')));
			self['countdown'] = $p['__op_sub']($sub1=$p['getattr'](self, 'countdown'),$sub2=1);
			if ($p['bool'](((($p['cmp']($p['getattr'](self, 'countdown'), 0))|1) == 1))) {
				self['schedule'](1000);
			}
			else {
				self['create_popup']();
				self['reset']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setHTML']('Click for countdown popup');
			self['countdown'] = $p['getattr'](self, 'countdown_save');
			self['start'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('onClick', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'start')))) {
				self['cancel']();
				self['reset']();
				return null;
			}
			self['start'] = false;
			self['schedule'](1);
			return null;
		}
	, 1, ['arg',null,['self']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('create_popup', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var popup,$add2,$add3,$add1,$add4,y,x,$mul4,$mul3,$mul2,$mul1;
			popup = $m['DialogBox'](false, false);
			popup['setHTML']($m['num']['pop']());
			x = $p['__op_add']($add1=self['box']['getAbsoluteLeft'](),$add2=(typeof ($mul1=$m['random']())==typeof ($mul2=100) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
			y = $p['__op_add']($add3=self['box']['getAbsoluteTop'](),$add4=(typeof ($mul3=$m['random']())==typeof ($mul4=100) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			popup['setPopupPosition'](x, y);
			popup['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['create_popup'] = $method;
		var $bases = new Array($m['Timer'],$m['Button']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupTimerButton', $p['tuple']($bases), $data);
	})();
	$m['bingo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bingo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,val,ptb,lucky,grid,$iter1_iter,$iter2_type,$iter2_idx,$add6,$iter1_array,rf,$add5,y,x,$iter2_array,$iter1_idx;
			lucky = $m['Grid']();
			lucky['resize'](9, 10);
			lucky['setBorderWidth'](1);
			lucky['setCellPadding'](25);
			lucky['setCellSpacing'](1);
			val = 0;
			$iter1_iter = $p['range'](0, 9);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				x = $iter1_nextval['$nextval'];
				$iter2_iter = $p['range'](0, 10);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					y = $iter2_nextval['$nextval'];
					val = $p['__op_add']($add5=val,$add6=1);
					lucky['setText'](x, y, val);
				}
			}
			grid = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'CellPadding':20, 'CellSpacing':0}, 1, 3]);
			rf = grid['getRowFormatter']();
			rf['setStyleName'](0, 'oddrow');
			ptb = $m['PopupTimerButton'](1);
			grid['setWidget'](0, 0, $pyjs_kwargs_call(null, $m['CaptionPanel'], null, null, [{'StyleName':'left'}, 'Start the Lucky Number Countdown', ptb]));
			grid['setWidget'](0, 1, $m['CaptionPanel']('Current Lucky Number', $p['getattr'](ptb, 'box')));
			grid['setWidget'](0, 2, lucky);
			$m['RootPanel']()['add'](grid, lucky);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('bingo', $p['tuple']($bases), $data);
	})();
	$m['onModuleLoad'] = function() {

		$m['bingo']();
		return null;
	};
	$m['onModuleLoad']['__name__'] = 'onModuleLoad';

	$m['onModuleLoad']['__bind_type__'] = 0;
	$m['onModuleLoad']['__args__'] = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('public/bingo.html');
		$m['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end bingo */


/* end module: bingo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HorizontalSlider.HorizontalSlider', 'pyjamas.ui.HorizontalSlider', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.CaptionPanel.CaptionPanel', 'pyjamas.ui.CaptionPanel', 'pyjamas.DOM', 'random.random', 'random', 'datetime.datetime', 'datetime', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
