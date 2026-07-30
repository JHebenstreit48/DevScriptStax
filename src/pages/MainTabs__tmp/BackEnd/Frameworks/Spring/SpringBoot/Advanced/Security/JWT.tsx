import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JWT = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security/JWT';

  return (
    <>
      <PageLayout>
        <PageTitle title="JWT (Spring)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWT;
