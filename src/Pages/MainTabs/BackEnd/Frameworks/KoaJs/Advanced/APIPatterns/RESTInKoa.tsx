import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RESTInKoa = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/APIPatterns/RESTInKoa';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST in Koa" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTInKoa;
