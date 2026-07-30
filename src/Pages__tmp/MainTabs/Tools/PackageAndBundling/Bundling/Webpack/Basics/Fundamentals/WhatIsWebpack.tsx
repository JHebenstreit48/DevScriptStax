import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatIsWebpack = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Basics/Fundamentals/WhatIsWebpack';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is Webpack?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsWebpack;
