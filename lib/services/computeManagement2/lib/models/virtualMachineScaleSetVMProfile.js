/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetVMProfile class.
 * @constructor
 * Describes a virtual machine scale set virtual machine profile.
 * @member {object} [osProfile] the virtual machine scale set OS profile.
 * 
 * @member {string} [osProfile.computerNamePrefix] the computer name prefix.
 * 
 * @member {string} [osProfile.adminUsername] the admin user name.
 * 
 * @member {string} [osProfile.adminPassword] the admin user password.
 * 
 * @member {string} [osProfile.customData] a base-64 encoded string of custom
 * data.
 * 
 * @member {object} [osProfile.windowsConfiguration] the Windows Configuration
 * of the OS profile.
 * 
 * @member {boolean} [osProfile.windowsConfiguration.provisionVMAgent] whether
 * VM Agent should be provisioned on the Virtual Machine.
 * 
 * @member {boolean} [osProfile.windowsConfiguration.enableAutomaticUpdates]
 * whether Windows updates are automatically installed on the VM
 * 
 * @member {string} [osProfile.windowsConfiguration.timeZone] the Time Zone of
 * the VM
 * 
 * @member {array} [osProfile.windowsConfiguration.additionalUnattendContent]
 * the additional base-64 encoded XML formatted information that can be
 * included in the Unattend.xml file.
 * 
 * @member {object} [osProfile.windowsConfiguration.winRM] the Windows Remote
 * Management configuration of the VM
 * 
 * @member {array} [osProfile.windowsConfiguration.winRM.listeners] the list
 * of Windows Remote Management listeners
 * 
 * @member {object} [osProfile.linuxConfiguration] the Linux Configuration of
 * the OS profile.
 * 
 * @member {boolean}
 * [osProfile.linuxConfiguration.disablePasswordAuthentication] whether
 * Authentication using user name and password is allowed or not
 * 
 * @member {object} [osProfile.linuxConfiguration.ssh] the SSH configuration
 * for linux VMs
 * 
 * @member {array} [osProfile.linuxConfiguration.ssh.publicKeys] the list of
 * SSH public keys used to authenticate with linux based VMs
 * 
 * @member {array} [osProfile.secrets] the List of certificates for addition
 * to the VM.
 * 
 * @member {object} [storageProfile] the virtual machine scale set storage
 * profile.
 * 
 * @member {object} [storageProfile.imageReference] the image reference.
 * 
 * @member {string} [storageProfile.imageReference.publisher] the image
 * publisher.
 * 
 * @member {string} [storageProfile.imageReference.offer] the image offer.
 * 
 * @member {string} [storageProfile.imageReference.sku] the image sku.
 * 
 * @member {string} [storageProfile.imageReference.version] the image version.
 * The allowed formats are Major.Minor.Build or 'latest'. Major, Minor and
 * Build being decimal numbers. Specify 'latest' to use the latest version of
 * image.
 * 
 * @member {object} [storageProfile.osDisk] the OS disk.
 * 
 * @member {string} [storageProfile.osDisk.name] the disk name.
 * 
 * @member {string} [storageProfile.osDisk.caching] the caching type. Possible
 * values include: 'None', 'ReadOnly', 'ReadWrite'
 * 
 * @member {string} [storageProfile.osDisk.createOption] the create option.
 * Possible values include: 'fromImage', 'empty', 'attach'
 * 
 * @member {string} [storageProfile.osDisk.osType] the Operating System type.
 * Possible values include: 'Windows', 'Linux'
 * 
 * @member {object} [storageProfile.osDisk.image] the Source User Image
 * VirtualHardDisk. This VirtualHardDisk will be copied before using it to
 * attach to the Virtual Machine.If SourceImage is provided, the destination
 * VirtualHardDisk should not exist.
 * 
 * @member {string} [storageProfile.osDisk.image.uri] the virtual hard disk's
 * uri. It should be a valid Uri to a virtual hard disk.
 * 
 * @member {array} [storageProfile.osDisk.vhdContainers] the list of virtual
 * hard disk container uris.
 * 
 * @member {object} [networkProfile] the virtual machine scale set network
 * profile.
 * 
 * @member {array} [networkProfile.networkInterfaceConfigurations] the list of
 * network configurations.
 * 
 * @member {object} [extensionProfile] the virtual machine scale set extension
 * profile.
 * 
 * @member {array} [extensionProfile.extensions] the virtual machine scale set
 * child extension resources.
 * 
 */
function VirtualMachineScaleSetVMProfile() {
}

/**
 * Defines the metadata of VirtualMachineScaleSetVMProfile
 *
 * @returns {object} metadata of VirtualMachineScaleSetVMProfile
 *
 */
VirtualMachineScaleSetVMProfile.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetVMProfile',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetVMProfile',
      modelProperties: {
        osProfile: {
          required: false,
          serializedName: 'osProfile',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetOSProfile'
          }
        },
        storageProfile: {
          required: false,
          serializedName: 'storageProfile',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetStorageProfile'
          }
        },
        networkProfile: {
          required: false,
          serializedName: 'networkProfile',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetNetworkProfile'
          }
        },
        extensionProfile: {
          required: false,
          serializedName: 'extensionProfile',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetExtensionProfile'
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetVMProfile;