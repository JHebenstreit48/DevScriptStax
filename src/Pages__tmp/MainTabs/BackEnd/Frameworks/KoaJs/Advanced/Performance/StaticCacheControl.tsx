import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StaticCacheControl = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Performance/StaticCacheControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Static Cache Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StaticCacheControl;
