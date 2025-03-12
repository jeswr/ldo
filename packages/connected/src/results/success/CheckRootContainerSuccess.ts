import type { Container } from "../../../resource/Container";
import type { ResourceSuccess, SuccessResult } from "./SuccessResult";

/**
 * Indicates that the request to check if a resource is the root container was
 * a success.
 */
export interface CheckRootContainerSuccess extends ResourceSuccess {
  type: "checkRootContainerSuccess";
  /**
   * True if this resoure is the root container
   */
  isRootContainer: boolean;
}

export interface GetStorageContainerFromWebIdSuccess extends SuccessResult {
  type: "getStorageContainerFromWebIdSuccess";
  storageContainers: Container[];
}
