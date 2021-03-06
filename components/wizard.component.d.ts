import { AfterContentInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
import { NavigationMode } from '../navigation/navigation-mode.interface';
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
export declare class WizardComponent implements OnChanges, AfterContentInit {
    model: WizardState;
    /**
     * A QueryList containing all [[WizardStep]]s inside this wizard
     */
    wizardSteps: QueryList<WizardStep>;
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     */
    navBarLocation: string;
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     */
    navBarLayout: string;
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     */
    navBarDirection: string;
    /**
     * The navigation mode used for transitioning between different steps.
     * The navigation mode can be either `strict`, `semi-strict` or `free`
     */
    navigationMode: string;
    /**
     * The initially selected step, represented by its index
     */
    defaultStepIndex: number;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     */
    disableNavigationBar: boolean;
    /**
     * Returns true if this wizard uses a horizontal orientation.
     * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
     *
     * @returns True if this wizard uses a horizontal orientation
     */
    readonly horizontalOrientation: boolean;
    /**
     * Returns true if this wizard uses a vertical orientation.
     * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
     *
     * @returns True if this wizard uses a vertical orientation
     */
    readonly verticalOrientation: boolean;
    /**
     * The navigation mode for this wizard
     */
    readonly navigation: NavigationMode;
    /**
     * Constructor
     *
     * @param model The model for this wizard component
     */
    constructor(model: WizardState);
    /**
     * Updates the model after certain input values have changed
     *
     * @param changes The detected changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Initialization work
     */
    ngAfterContentInit(): void;
}
