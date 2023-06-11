/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export const API_LATEST = '/api/latest';

export const skipNulls = (key: string, value: unknown) => {
  if (value == null) {
    return undefined;
  }
  return value;
};
