async function startTest() {
  const downloadUrl = '/testfile'; // Your server will redirect to a public test file
  const uploadUrl = '/upload';      // Your server upload endpoint

  document.getElementById('downloadSpeed').innerText = "Calculating download speed...";
  document.getElementById('uploadSpeed').innerText = "Calculating upload speed...";

  // Calculate download speed
  const downloadSpeed = await testDownloadSpeed(downloadUrl);
  document.getElementById('downloadSpeed').innerText = `Download Speed: ${downloadSpeed} Mbps`;

  // Calculate upload speed
  const uploadSpeed = await testUploadSpeed(uploadUrl);
  document.getElementById('uploadSpeed').innerText = `Upload Speed: ${uploadSpeed} Mbps`;
}

// Download speed test
async function testDownloadSpeed(url) {
  const startTime = new Date().getTime();

  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');

      const contentLength = response.headers.get('Content-Length');
      if (!contentLength) throw new Error('Content-Length not provided');

      const totalBytes = parseInt(contentLength, 10);
      await response.blob(); // Ensure the file is fully downloaded

      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000; // Convert to seconds
      const speedMbps = (totalBytes * 8) / (duration * 1024 * 1024); // Convert to Mbps

      return speedMbps.toFixed(2);
  } catch (error) {
      console.error('Error during download test:', error); // Log the specific error
      return 'Download Test Failed';
  }
}

// Upload speed test
async function testUploadSpeed(url) {
  const startTime = new Date().getTime();
  const fileSize = 512 * 1024; // Use 512 KB for upload testing
  const dummyData = new Blob([new Array(fileSize).join('a')]); // Dummy data for upload

  try {
      await fetch(url, {
          method: 'POST',
          body: dummyData
      });

      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000; // Convert to seconds
      const speedMbps = (fileSize * 8) / (duration * 1024 * 1024); // Convert to Mbps

      return speedMbps.toFixed(2);
  } catch (error) {
      console.error('Error during upload test:', error); // Log the specific error
      return 'Upload Test Failed';
  }
}
