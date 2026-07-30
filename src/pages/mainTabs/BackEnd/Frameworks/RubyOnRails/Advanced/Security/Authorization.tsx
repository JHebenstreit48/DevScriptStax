import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Authorization = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/Security/Authorization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Authorization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Authorization;
