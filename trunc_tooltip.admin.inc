<?php

/**
 * @file
 * Configuration admin for Truncate Tooltip.
 */

/**
 * Configuration form
 */
function trunc_tooltip_admin_settings() {
	$form = array();

	$form['trunc_selectors'] = array(
		'#type' => 'textarea',
		'#title' => 'Field Selectors',
		'#description' => 'Enter selectors for truncated text field, separated by coma',
		'#default_value' => variable_get('trunc_selectors', t('.field-name-title a, .rc-core-item-name a'))
	);
	return system_settings_form($form);
}

/**
 * Form validation to make sure input is valid css selector
 */
function trunc_tooltip_admin_settings_validate($form, &$form_state) {
	$rgx = "/^([-.#_a-zA-Z])([a-zA-Z #,-.#]+)$/";
	$selectors = $form_state['values']['trunc_selectors'];

	if (preg_match($rgx, $selectors)) {
		// Valid selector
	}else {
		// Invalid selctor
	  form_set_error('trunc_selectors', t('You must enter a valid CSS selector.'));
	}
}