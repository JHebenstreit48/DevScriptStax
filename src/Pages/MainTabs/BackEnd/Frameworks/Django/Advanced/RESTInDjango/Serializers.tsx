import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Serializers = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/RESTInDjango/Serializers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Serializers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Serializers;
