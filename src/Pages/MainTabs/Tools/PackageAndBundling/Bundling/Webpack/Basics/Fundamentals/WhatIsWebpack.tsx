import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatIsWebpack = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/Fundamentals/WhatIsWebpack';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What is Webpack?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsWebpack;
