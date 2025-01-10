# JavaScript TypeError with undefined and strict equality

This repository demonstrates a common JavaScript error that occurs when using the strict equality operator (`===`) to check for `null` but not considering the possibility of `undefined`.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` provides a corrected version.

## Problem

The original code attempts to handle the case where the input `x` is `null` by returning 0.  However, if `x` is `undefined`, accessing `x.length` throws a `TypeError` because `undefined` is not an object and has no `length` property.

## Solution

The corrected code handles both `null` and `undefined` values gracefully.
